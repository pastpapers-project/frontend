import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";  // Import ScrollArea for scrolling content
import { getSavedPapers } from "@/utils/userService";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { SavePaper } from "@/types/paper";
 
export function SavedPapersDialog({ userId }: { userId: string }) {
  const [savedPapers, setSavedPapers] = useState<SavePaper[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // This function will be called when the user wants to view saved papers
  const viewSavedPapers = async () => {
    try {
      // Fetch saved papers using the API
      const papers = await getSavedPapers(userId);
      setSavedPapers(papers); // Set the saved papers from the fetched user data
      setIsOpen(true); // Open the dialog
    } catch (error) {
      console.error("Error fetching saved papers:", error);
      // Optionally show an error message or handle the error here
    }
  };

  return (
    <>
      {/* Trigger button or item to view saved papers */}
      <DropdownMenuItem onClick={() => viewSavedPapers()}>Saved papers</DropdownMenuItem>

      {/* Dialog to show saved papers */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Saved Papers</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Saved Papers</DialogTitle>
            <DialogDescription>Here are all your saved papers:</DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-60">
            <div className="flex flex-col gap-4 py-4">
              {savedPapers.length > 0 ? (
                savedPapers.map((paper) => (
                  <div key={paper.id} className="border-b py-2">
                    <p className="font-medium">{paper.course_name} ({paper.year})</p>
                    <p className="text-sm">{paper.pastpaper_type} - {paper.variant}</p>
                    <a href={paper.pdf_url} target="_blank" className="text-blue-600">Download Paper</a>
                  </div>
                ))
              ) : (
                <p>No saved papers found.</p>
              )}
            </div>
          </ScrollArea>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
