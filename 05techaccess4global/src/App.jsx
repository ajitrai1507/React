import { useState } from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Team from "./components/Team";

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Herosection />
      <h2 className="text-4xl text-white text-center mt-8 font-medium ">
        People who made it successful
      </h2>
      <Team username="Sahil" intro="Sahil is the founder of techaccess4global" source="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/135297094_1107708316357769_7907473557551368893_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=53a332&_nc_ohc=0_HRqeEJZcsQ7kNvgHdrZMV&_nc_ht=scontent-del1-1.xx&_nc_gid=AoCWY6rAXo0IoLgdx8XfubE&oh=00_AYDccJnG5EGQV_TjekNN6OGmtt4w1_uWSEKOkt2qo21uRw&oe=670F7CB9" />
      <Team username="Abhishek" intro="Abhishek is manage the clients" source="https://scontent-del2-1.xx.fbcdn.net/v/t1.6435-9/136989319_2757739351146672_6266237951858197009_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=2a1932&_nc_ohc=Qlrzso6UGU4Q7kNvgEPstkn&_nc_ht=scontent-del2-1.xx&_nc_gid=A8a1Due3a76MRGywqytwI-6&oh=00_AYC4xL2LiH0tPtTs41rxyLOtvDWLJPFKD5u8kQPcFCA4BA&oe=670F5F9B"/>
      <Team username="Aman" intro="Aman manages the Account Section" source="https://scontent-del1-2.xx.fbcdn.net/v/t1.6435-9/202816362_559054688615660_8444112806755505014_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=bLOeZeBK4R0Q7kNvgHtWIEC&_nc_ht=scontent-del1-2.xx&_nc_gid=AnYq0pVowo8EqHNLdVQAeaM&oh=00_AYCHRpd_awwujF5VcckVnki-T2SzbGOfYNO0-ovnzaKqQQ&oe=670F80BD"/>
      <Team username="Rahul" intro="Rahul is manages all the files" source="https://scontent-del2-1.xx.fbcdn.net/v/t1.6435-9/122941205_810313419728319_5848035525430467502_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=p-b-JPxjY7AQ7kNvgHhDVho&_nc_ht=scontent-del2-1.xx&_nc_gid=A7W3TJ9sAEeUXoe9JXyIeOg&oh=00_AYBN66UawdYELgJaKzTLvCIiXX6VvMytMQGA66KFGJgi4w&oe=670F7F43"/>
      <Team username="Vikash" intro="Vikash is manages the quality of the file " source="https://scontent-del2-1.xx.fbcdn.net/v/t1.6435-9/135432009_884697848983540_9145257667977759379_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EKATiGprMZYQ7kNvgH_FbPU&_nc_ht=scontent-del2-1.xx&_nc_gid=Ai-zp3vUYIGRIpBdtraRF12&oh=00_AYBN4UdWG6CbPlmBvxtyYqvc-nhKyFiUFXmkE_lSkf8O0w&oe=670F78C8"/>
      <Team username="Ajit" intro="Ajit is manage the website "source="https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/313432215_1770670639982388_7443821598308048799_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GVkuh9XBi0IQ7kNvgGquma-&_nc_ht=scontent-del1-2.xx&_nc_gid=ABf8PxPXYzEst7RFTyVy1mZ&oh=00_AYBVyR1RGgNRv11dPSKtAvXITICS5k-XmrteQ9Wz6d7fqA&oe=66EDE253"/>
    </>
  );
}

export default App;
