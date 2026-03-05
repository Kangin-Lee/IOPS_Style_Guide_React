//사이드 바 메뉴 라우트 설정

import BadgePage from "@/pages/badge";
import App from "../App";
import ButtonsPage from "../pages/buttons";
import {
  Badge,
  BookOpenText,
  Bone,
  Calendar1,
  CalendarDays,
  ChartArea,
  ChevronRight,
  CircleArrowRight,
  FileUp,
  Grid3X3,
  Heading,
  LayoutDashboard,
  ListCollapse,
  Logs,
  MessageCircleWarning,
  Search,
  Settings2,
  Square,
  Table,
  Text,
  Home,
  Joystick,
  TextInitial,
} from "lucide-react";
import AccordionPage from "@/pages/accordion";
import InputPage from "@/pages/input";
import TabsPage from "@/pages/tabs";
import FeedbackPage from "@/pages/feedback";
import ControlPage from "@/pages/control";
import SliderPage from "@/pages/slider";
import BreadcrumbPage from "@/pages/breadcrumb";
import CardPage from "@/pages/card";
import IconPage from "@/pages/icon";
import PaginationPage from "@/pages/pagination";
import ChartsPage from "@/pages/charts";
import GridPage from "@/pages/grid";
import FileUploadPage from "@/pages/fileUpload";
import SkeletonPage from "@/pages/skeleton";
import TablePage from "@/pages/table";
import TextareaPage from "@/pages/textarea";
import TextPage from "@/pages/text";
import DatePickerPage from "@/pages/datepicker";

export const sideMenuRoutes = [
  {
    path: "/",
    title: "Home",
    icon: <Home size={16} />,
    element: <App />,
  },
  {
    path: "/accordion",
    title: "Accordion",
    icon: <ListCollapse size={16} />,
    element: <AccordionPage />,
  },
  {
    path: "/badge",
    title: "Badge",
    icon: <Badge size={16} />,
    element: <BadgePage />,
  },
  {
    path: "/breadcrumb",
    title: "Breadcrumb",
    icon: <ChevronRight size={16} />,
    element: <BreadcrumbPage />,
  },
  {
    path: "/button",
    title: "Button",
    icon: <CircleArrowRight size={16} />,
    element: <ButtonsPage />,
  },
  // {
  //   path: "/calendar",
  //   title: "Calendar",
  //   icon: <CalendarDays size={16} />,
  //   element: <div>Calendar Page</div>,
  // },
  {
    path: "/card",
    title: "Card",
    icon: <Square size={16} />,
    element: <CardPage />,
  },
  {
    path: "/chart",
    title: "Chart",
    icon: <ChartArea size={16} />,
    element: <ChartsPage />,
  },
  {
    path: "/control",
    title: "Control",
    icon: <Joystick size={16} />,
    element: <ControlPage />,
  },
  {
    path: "/datepicker",
    title: "DatePicker",
    icon: <Calendar1 size={16} />,
    element: <DatePickerPage />,
  },
  {
    path: "/feedback",
    title: "Feedback",
    icon: <MessageCircleWarning size={16} />,
    element: <FeedbackPage />,
  },
  {
    path: "/fileupload",
    title: "FileUpload",
    icon: <FileUp size={16} />,
    element: <FileUploadPage />,
  },
  {
    path: "/grid",
    title: "Grid",
    icon: <Grid3X3 size={16} />,
    element: <GridPage />,
  },
  {
    path: "/icon",
    title: "Icon",
    icon: <Search size={16} />,
    element: <IconPage />,
  },
  {
    path: "/input",
    title: "Input",
    icon: <Search size={16} />,
    element: <InputPage />,
  },
  {
    path: "/layout",
    title: "Layout",
    icon: <LayoutDashboard size={16} />,
    element: <div>Layout 페이지입니다.</div>,
  },
  {
    path: "/pagination",
    title: "Pagination",
    icon: <BookOpenText size={16} />,
    element: <PaginationPage />,
  },
  {
    path: "/skeleton",
    title: "Skeleton",
    icon: <Bone size={16} />,
    element: <SkeletonPage />,
  },
  {
    path: "/slider",
    title: "Slider",
    icon: <Settings2 size={16} />,
    element: <SliderPage />,
  },
  {
    path: "/table",
    title: "Table",
    icon: <Table size={16} />,
    element: <TablePage />,
  },
  {
    path: "/tabs",
    title: "Tabs",
    icon: <Logs size={16} />,
    element: <TabsPage />,
  },
  {
    path: "/text",
    title: "Text",
    icon: <Text size={16} />,
    element: <TextPage />,
  },
  {
    path: "/textarea",
    title: "Textarea",
    icon: <TextInitial size={16} />,
    element: <TextareaPage />,
  },
  // {
  //   path: "/title",
  //   title: "Title",
  //   icon: <Heading size={16} />,
  //   element: <div>Title Page</div>,
  // },
];
