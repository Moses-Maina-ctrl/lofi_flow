import { ReactNode } from "react";
import Sidebar from "./sidebar";



const PlayerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen">
      <div className="absolute top-0 left-0 w-64 bg-neutral">
        <Sidebar />
      </div>
      <div className="ml-64 mb-28">
        {children}
      </div>
      <div className="absolute w-screen h-28 bottom-0 left-0 bg-neutral">
        player
      </div>
    </div>
  )
}

export default PlayerLayout;
