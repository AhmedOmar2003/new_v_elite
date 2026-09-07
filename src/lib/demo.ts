import { toast } from "sonner";

/**
 * Interactive workspace actions helper.
 * Provides instant feedback for actions across the enterprise workspace.
 */
export function demo(action: string, description?: string) {
  toast.success(action, {
    description: description ?? "Demo action only. No data was saved.",
  });
}
