import ScienceIcon from "@mui/icons-material/Science";
import CalculateIcon from "@mui/icons-material/Calculate";
import BiotechIcon from "@mui/icons-material/Biotech";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ComputerIcon from "@mui/icons-material/Computer";
import WavesIcon from "@mui/icons-material/Waves";

export const appname = "Pastprep";
export const samplesubjects = [
  { name: "Mathematics", icon: CalculateIcon },
  { name: "Accounting", icon: AccountBalanceIcon },
  { name: "Chemistry", icon: ScienceIcon },
  { name: "Physics", icon: WavesIcon },
  { name: "Biology", icon: BiotechIcon },
  { name: "Computer Science", icon: ComputerIcon },
];
export const faq = [
  { q: "xyz?", a: "yes" },
  { q: "pqr?", a: "No" },
  { q: "abc?", a: "Maybe" },
];
export interface Course {
  name: string;
  id: number;
  files: [{ type: string; variant: number; paper: number; time: string }];
}
export const courses: [Course] = [
  {
    name: "Physics",
    id: 9709,
    files: [
      { type: "Question Paper", variant: 2, paper: 2, time: "2024 Summer" },
      { type: "Marking Scheme", variant: 2, paper: 2, time: "2024 Summer" },
      { type: "Question Paper", variant: 1, paper: 2, time: "2024 Summer" },
      { type: "Question Paper", variant: 1, paper: 2, time: "2024 Summer" },
      { type: "Question Paper", variant: 2, paper: 1, time: "2024 Summer" },
      { type: "Question Paper", variant: 2, paper: 1, time: "2024 Summer" },
      { type: "Question Paper", variant: 1, paper: 1, time: "2024 Summer" },
      { type: "Question Paper", variant: 1, paper: 1, time: "2024 Summer" },
      { type: "Grade Threshold", variant: 0, paper: 0, time: "2024 Summer" },
    ],
  },
  {
    name: "Chemistry",
    id: 9701,
    files: [
      { type: "Question Paper", variant: 2, paper: 2, time: "2024 Summer" },
      { type: "Marking Scheme", variant: 2, paper: 2, time: "2024 Summer" },
      { type: "Question Paper", variant: 1, paper: 2, time: "2024 Summer" },
      { type: "Question Paper", variant: 1, paper: 2, time: "2024 Summer" },
      { type: "Question Paper", variant: 2, paper: 1, time: "2024 Summer" },
      { type: "Question Paper", variant: 2, paper: 1, time: "2024 Summer" },
      { type: "Question Paper", variant: 1, paper: 1, time: "2024 Summer" },
      { type: "Question Paper", variant: 1, paper: 1, time: "2024 Summer" },
    ],
  },
];
