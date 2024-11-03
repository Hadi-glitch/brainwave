"use server";

import { revalidatePath } from "next/cache";

import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import { handleError } from "../utils";

export async function createUser(user) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

export async function getUserById(userId) {
  try {
    await connectToDatabase();

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

export async function updateUser(clerkId, user) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteUser(clerkId) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

export async function getUserCredits(userId) {
  try {
    await connectToDatabase();

    const user = await User.findById(userId).select("credits");

    if (user) {
      return user.credits;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    handleError(error);
  }
}

export async function updateUserCredits(userId, amount) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $inc: { credits: amount } },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      throw new Error("User not found");
    }

    return updatedUser.credits;
  } catch (error) {
    handleError(error);
  }
}

export async function getUserId(clerkId) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ clerkId }, { _id: 1 });
    if (!user) throw new Error("User not found");

    return user._id.toString();
  } catch (error) {
    handleError(error);
  }
}

export async function setUserCredits(userId, newCredits, newPlan) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          credits: newCredits,
          plan: newPlan,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedUser) {
      throw new Error("User not found");
    }

    revalidatePath("/");

    return {
      credits: updatedUser.credits,
      plan: updatedUser.plan,
    };
  } catch (error) {
    handleError(error);
  }
}
