import cappadocia from "../assets/Images/cappadocia.avif";
import cappadocia2 from "../assets/Images/cappadocia2.avif";
import frontendLogic from "../assets/Images/coding.png";
import roles from "../assets/Images/Frame 60.png";
import loginUI from "../assets/Images/Frame 61.png";
import manageTour from "../assets/Images/Frame 62.png";
import review from "../assets/Images/Frame 63.png";
import search from "../assets/Images/Frame 64.png";
import register from "../assets/Images/Frame 65.png";
import homepage from "../assets/Images/Frame 66.png";
import detailpage from "../assets/Images/Frame 67.png";
import techs from "../assets/Images/Frame_59_1.png";
import frontendDesign from "../assets/Images/graphic-design.png";
import hung from "../assets/Images/hung-avt.jpg";
import logo from "../assets/Images/logo.jpg";
import nghi from "../assets/Images/nghi-avt.jpg";
import registerAdmin from "../assets/Images/ReigsterAdmin.png";
import backend from "../assets/Images/server.png";
import ticket from "../assets/Images/Ticket.png";
import tuan from "../assets/Images/tuan-avt.jpg";

export default [techs, roles, search, review, manageTour, loginUI, register];

export const avtArr = [
  {
    id: 1,
    name: "Hùng",
    img: hung,
    link: "https://leander-25.github.io/",
  },
  {
    id: 2,
    name: "Tuấn",
    img: tuan,
    link: "https://vantuan-01.github.io/",
  },
  {
    id: 3,
    name: "Tuấn",
    img: nghi,
    link: "https://kendumboiz.github.io/ducnghi/",
  },
];

export const photoArr = [
  {
    id: 1,
    img: homepage,
    content: "Home page",
  },
  {
    id: 2,
    img: detailpage,
    content: "Detail page",
  },
  {
    id: 3,
    img: registerAdmin,
    content: "Admin Regist",
  },
  {
    id: 4,
    img: ticket,
    content: "Ticket",
  },
];

export const Images = {
  BACKEND: backend,
  FRONTENDDESIGN: frontendDesign,
  FRONTENDLOGIC: frontendLogic,
  CAPPADOCIA: cappadocia,
  CAPPADOCIA2: cappadocia2,
  LOGO: logo,
};
