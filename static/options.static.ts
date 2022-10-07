import SendIcon from "@/assets/sent.svg";
import StarIcon from "@/assets/StarIcon.svg";
import ArchiveIcon from "@/assets/ArchiveIcon.svg";
import DeleteIcon from "@/assets/DeleteIcon.svg";
import DraftIcon from "@/assets/DraftIcon.svg";
import FinanceIcon from "@/assets/FinanceIcon.svg";
import WorkIcon from "@/assets/WorkIcon.svg";
import PersonalIcon from "@/assets/PersonalIcon.svg";

export const SidebarOptions = [
    {
        id: 1,
        title: "Sent",
        Icon: SendIcon,
        unread: "999+",
    },
    {
        id: 2,
        title: "Starred",
        Icon: StarIcon,
        unread: "245",
    },
    {
        id: 3,
        title: "Archive",
        Icon: ArchiveIcon,
        unread: "99",
    },
    {
        id: 4,
        title: "Delete",
        Icon: DeleteIcon,
        unread: "509",
    },
    {
        id: 5,
        title: "Drafts",
        Icon: DraftIcon,
        unread: "10",
    }
]

export const FolderOptions = [
    {
        id: 1,
        title: "Finance",
        Icon: FinanceIcon,
        unread: "14",
    },
    {
        id: 2,
        title: "Work",
        Icon: WorkIcon,
        unread: "12", 
    },
    {
        id: 3,
        title: "Personal",
        Icon: PersonalIcon,
        unread: "23",
    }
]