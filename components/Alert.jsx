"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, CreditCard } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function Component({ setShowAlert = () => {} }) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const onCancel = () => {
    setIsOpen(false);
    setShowAlert(false);
  };

  const onContinue = () => {
    setIsOpen(false);
    setShowAlert(false);
    router.push("/pricing");
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 text-2xl">
            <AlertTriangle className="h-6 w-6 text-yellow-500" />
            You're out of credits!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            Come back next month for more credits or upgrade your plan to
            continue using our services without interruption.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="my-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            Upgrading your plan gives you access to additional features and
            priority support.
          </p>
        </div>
        <AlertDialogFooter className="gap-2 sm:gap-0">
          <AlertDialogCancel asChild>
            <Button
              variant="outline"
              onClick={onCancel}
              className="w-full sm:w-auto"
            >
              Maybe later
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              onClick={onContinue}
              className="w-full sm:w-auto"
              variant="outline"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Upgrade now
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
