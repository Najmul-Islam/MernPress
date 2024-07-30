"use client";
import { useTheme } from "@/context/ThemeContex";
import Rodal from "rodal";

const Sidebar = () => {
  const { visible, hide } = useTheme();

  return (
    <Rodal
      animation="slideLeft"
      showMask={true}
      visible={visible}
      onClose={hide}
      customStyles={{
        right: "auto",
        borderRadius: "0",
        height: "100vh",
        padding: "0",
      }}
      customMaskStyles={{
        cursor: "pointer",
        backgroundColor: "#3d3d3ecc",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptate
      consequuntur corrupti iusto aspernatur, totam autem enim quis? A, debitis
      enim? Iusto quidem sequi eveniet possimus dignissimos quam, temporibus
      repudiandae!
    </Rodal>
  );
};
export default Sidebar;
