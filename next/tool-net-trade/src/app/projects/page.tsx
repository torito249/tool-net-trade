// app/projects/page.tsx
import Head from "next/head";
import { Box } from "@mui/material";
import MilestoneList from "@/components/MilestoneList";
import ShipInfo from "@/components/ShipInfo";
import ShipMilestones from "@/components/ShipMilestones";
import ChatBox from "@/components/ChatBox";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>案件管理アプリ - 案件管理</title>
      </Head>
      <Box display="flex" justifyContent="space-around">
        <MilestoneList />
        <Box>
          <ShipInfo
            name="WAN HAI 295"
            voyageNumber="N028"
            eta="2024-09-30"
            shipCompanyUrl="https://www.toyoshingo.com/wanhai/certificate.php?portcode=13&id=9520647"
            marineTrafficUrl="https://www.marinetraffic.com/en/ais/details/ships/shipid:7095009/mmsi:563159700/imo:9871414/vessel:WAN_HAI_295"
            voyageInfoUrl="https://jp.wanhai.com/views/skd/SkdByVsl.xhtml?file_num=64794&top_file_num=64735&parent_id=64834"
          />
          <ShipMilestones />
        </Box>
        <ChatBox />
      </Box>
    </div>
  );
}
