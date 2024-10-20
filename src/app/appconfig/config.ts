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
  files: {pid: number; type: string; variant: number; paper: number; year: number, tenure: string, pdf_url: string}[];
}
export const courses: Course[] = [
  {
    name: "Islamic Studies",
    id: 2068,
    files: [
      { 
        pid: 1,
        type: "Grade Threshold",
        variant: 0,
        paper: 0,
        year: 2024,
        tenure: "Summer",
        pdf_url: "https://api.rovepapers.com/yearly/download/dc84fffbdf9444c0b9c96ec5456226c5e20de98a1a4c44038c82a47fc386eec021da6005ef584161924863e44fa651124ff140d8b05745fa829045741f0e05f710a1933e98c0451e9820fdb621cd7c556e757bf7fa5241ec9005ce57afd07f50ac2fdb975e8c4c79b4538104e219733e4074fb65c7bf466f95649a61af786a1"
      },
      {
        pid: 12,
        type: "Question Paper",
        variant: 1,
        paper: 1,
        year: 2024,
        tenure: "Summer",
        pdf_url: "https://api.rovepapers.com/yearly/download/d9a53f9c2f2444688e3f89d4c4da6c74ed8bfbf37e6f4c97a312fa47eb5f6409df2358b9a0a14392a5857dc69bb7558727b1fcd66da14f5d9330a984e288dbee6fbb2106ee814d47a7784decec66b257c29b0ed910cd4c5cb560464ff9e8c420b3be1b18d8c545fe96be3be6116209c04827b880c5a04848ae647feb0de765d"
      },
      {
        pid: 13,
        type: "Marking Scheme",
        variant: 1,
        paper: 1,
        year: 2024,
        tenure: "Summer",
        pdf_url: "https://api.rovepapers.com/yearly/download/858ea201c6334664b38f2815f1786bef09f948015caf4a3e845cc6dac85daa69475f7a5a45df41dc9e93828adef8392fd6ab9e313f35463ab9f37c0ee857b5e911b21993e1534c69b8e3e947992dec8558f5b63e3f4c44dcad7ff9458d11d6b47286a4c16df741f8b89caac86c37594c7e919db9e4f04bc584c273379ec7a29"
      },
      {
        pid: 14,
        type: "Question Paper",
        variant: 2,
        paper: 2,
        year: 2024,
        tenure: "Summer",
        pdf_url: "https://api.rovepapers.com/yearly/download/6f63f9d9fa704cec86153cd62f7fe59b54b8ac385f264e81bc09a50976c4dd9ea6824406cdf64d48a4e56f237e8142c87c48d548e4b94be497af9515cf9ad1b9a07f7628e1df4e67bcedcd499ab8ba12aa306bfad5f44e14a35e9fc22cb79fbe321b0ea748a64d79a69b780a12813e61857d1e6a243e4a15ac5808364f35ca2"
      },
      {
        pid: 15,
        type: "Marking Scheme",
        variant: 2,
        paper: 2,
        year: 2024,
        tenure: "Summer",
        pdf_url: "https://api.rovepapers.com/yearly/download/60dd847a69544989803e36c96afbb0a91c2cc372a5414ec09fef6a461af32f36eaa95e60edef4c44940c0fcf7a56eb6fa8a26572f4a64b8b82d5c5050f8808e3728309c4a33d46f696b61082d380a3c84349ca420ee7467784e3427ddcd9507d3bc7c435b32c43d89ed867d2e6bfc7471569fd51e7fc437c8b53029f98db7b1"
      }
    ]
  },
  {
    name: "Business Studies",
    id: 7115,
    files: [
      {
        pid: 21,
        type: "Grade Threshold",
        variant: 0,
        paper: 0,
        year: 2024,
        tenure: "Summer",
        pdf_url: "https://api.rovepapers.com/yearly/download/2de377e7d82b457c8783e6e43f6c8cfac89af3e641504672b32982191ae3fd9af059a56541f34dc6be7c4fc51c40c3fa33498a7d47b14a419c2d9435a422f194eb200634205d446fbf74b7914fdd3c660e11b3eb86d141e782fa6aed6bc72136f328a5c887b24ace9f091336f4ed59c7bde95a44b54d41aab30bff73b368f67"
      },
      {
        pid: 22,
        type: "Question Paper",
        variant: 1,
        paper: 1,
        year: 2024,
        tenure: "Summer",
        pdf_url: "https://api.rovepapers.com/yearly/download/d5000650b9f947aea05501ece9ead01e2ea9bcfc6a494cfc9b160fda04114b1884324a5dd30a48d5b4eeef4c1b3dd6667444b40a75e148459f23be8ccfd28b9fa7c4cd287a3944bf8783a9a265ef9278b9d4d360f20b4e93a6e3469d6fe9bb1be7bfca878def4f24818d6299ed633fb5ac4ab72a025b4905a342322d13f98a9"
      },
      {
        pid: 23,
        type: "Marking Scheme",
        variant: 1,
        paper: 1,
        year: 2024,
        tenure: "Summer",
        pdf_url: "https://api.rovepapers.com/yearly/download/22931807651c4cf89f09f7ade31aeaa70fc77ae2028f4208af4dc2b3179a1f3bc8b08235aa954b7dab4b45f90e93b9e241bdb0b854b443d597aef28c947d12ea00eaecd9cc564762b49d9856b3c7e13e4379edbee20f4f0f829cf208518a67ad4dd2610e3ed94018ad2e8e75a196817470e0a3af182c4619bdb072e7c8a1317"
      },
      {
        pid: 24,
        type: "Question Paper",
        variant: 2,
        paper: 2,
        year: 2024,
        tenure: "Summer",
        pdf_url: "https://api.rovepapers.com/yearly/download/a3ceafb91da14292a6579bf7e3528ba0db4fb75f1de746c599ce0d0cc7f0a9539522a160442e4b4e8d46c45485165e87487ec3fc620844e3ab8dfb147c3449e9c79f7af3bb0949c9a7fbd9c5f64ce71efd26f6298cf24ff19cb3e85753eb0373d73b6ee825034488918c8392b3ecc50f198bbf9b414847aba27ed7ea4127f8d"
      },
      {
        pid: 25,
        type: "Marking Scheme",
        variant: 2,
        paper: 2,
        year: 2024,
        tenure: "Summer",
        pdf_url: "https://api.rovepapers.com/yearly/download/ba8d74ff64614008897ac8bae8f2041cb1aec7ff871e401bb8cad7b889cb5d6f695b6a030a3345ed8a62d9d4a7f7178c4a3ba04ad1ed4926a51e4062d64d2ad249ac346f07c045f4b6796f70f23fad6a7ae4b48dfc2c4772b5e4ca7bdb0adb9975c5d1bf641f459c9ae17f7245115be91b8e489adb034159b7c4162a4aa7da4"
      }
    ]
  },
  {
    name: "Accounting",
    id: 7707,
    files: [
      {
        pid: 31,
        type: "Grade Threshold",
        variant: 0,
        paper: 0,
        year: 2024,
        tenure: "Summer",
        pdf_url: "https://api.rovepapers.com/yearly/download/4c63f5c8411e4cd7981c11c9115a72c67a0e6c39152a4312ae76a5a81369acc9120b256abb82416d95540098c76bca18d33a9519b57f4d83a271f201fa1e6847b431e0d898a640a0b999d683ca32686da1d3f42cb1d44d62b012fb6fd874bf008808ba0601af4bc39cf5457fc65bd5380caf4c792ca747d793e5da90c93b484"
      },
      {
        pid: 32,
        type: "Question Paper",
        variant: 1,
        paper: 1,
        year: 2024,
        tenure: "Summer",
        pdf_url: "https://api.rovepapers.com/yearly/download/02ae25bd53d0409f9e9dc16cb6e47f7749298c392a9d48359a29bbaf663ecd0a374c7ce4e29346f6853608938c8ff046c330bd000e6f4184bfa315577a2deaad7ebc63c9a2854c099d6ac4d58c8a24c2d78d4c008aa747488cb1cc0752c135dbea6645f3259d4b3bbdac33a624befcda2d86f04ac3f84f3ea52dd575a70634c"
      },
      {
        pid: 33,
        type: "Marking Scheme",
        variant: 1,
        paper: 1,
        year: 2024,
        tenure: "Summer",
        pdf_url: "https://api.rovepapers.com/yearly/download/5e8b1b95c08f4702a11514e425e46c1194139a630a914404b9444ec5e41b30cb1908b8f0752a4374b1c17f1da31e4ae6da4b5af7755c441d807df9fb38d5e5337a6519acdc314080b3eff2425b26399efb37381ad8bd43368da148143a806ed6de2b057f108b4c1098a18fc4d1122ad56d7f8b3594b54f57bf7ea9769073f54"
      },
      {
        pid: 34,
        type: "Question Paper",
        variant: 2,
        paper: 2,
        year: 2024,
        tenure: "Summer",
        pdf_url: "https://api.rovepapers.com/yearly/download/a9b994f2c53447229086a91399d5a3c2ca54c7ac1e0a4c05aa4f8577107ed508f3235c201a1e4cd8b67c908a4bd5ea300b18b6e44fe647609986e96ebe1600cbc10079faa586484daeed92f0c40698f808b75ddf2e474ab5ac0b4865ebf82365e5faefce51a54c2b813c07202f90bc0f4fa58cafb4bf40f492275a47b1f74b1"
      },
      {
        pid: 35,
        type: "Marking Scheme",
        variant: 2,
        paper: 2,
        year: 2024,
        tenure: "Summer",
        pdf_url: "https://api.rovepapers.com/yearly/download/a38111d7658f424aa138f3f71e830c019c61cc08a20245aa9a4948700b25073618be276192e24045983eb32a3fadc7e23e98f1e7c24a4311b508b37f7df0fb1b77070e5bc7044e4d80306fdde82afd2520c7f1ac4e7046428fadbb942d5217a80cf918a10dfb48e7b64772e1f5ae8bda44d225c893204500b10b283d00b2ddc"
      }
    ]
  }
];