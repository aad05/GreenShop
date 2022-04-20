import Gul1 from "../../assets/imgs/svetok.png";
import Gul2 from "../../assets/imgs/svetok2.png";
import Gul3 from "../../assets/imgs/svetok3.png";
import Delete from "../../assets/icons/delete.svg";
import Edit from "../../assets/icons/edit.svg";

export const crudData = [
  {
    id: 1,
    item: "Data Published",
    icon: Gul1,
    title: "Barberton Daisy",
    preTitle: "SKU: 1995751877966",
    dataPublished: "30 december 2022",
    status: "Active",
    wiev: "3521",
    edit: Edit,
    delete: Delete,
  },
  {
    id: 2,
    icon: Gul2,
    title: "Blushing Bromeliad",
    preTitle: "SKU: 19957518757065",
    dataPublished: "30 december 2022",
    status: "Panding",
    wiev: "3521",
    edit: Edit,
    item: "Status",
    delete: Delete,
  },
  {
    id: 3,
    icon: Gul3,
    title: "Aluminum Plant",
    preTitle: "SKU: 1995751877786",
    dataPublished: "30 december 2022",
    status: "Pending",
    wiev: "1233",
    edit: Edit,
    delete: Delete,
    item: "View",
  },
];
