import { BaseLayout } from "components/BaseLayout/baseLayout";
import Button from "components/Button/button";
import SvgComponent from "components/SvgComponent/svgComponent";

export const HomePage = () => {
  const logoWidth = 367;
  const logoHeight = 177;

  const pageStyles = {
    display: "flex",
    flexDirection: 'column' as 'column',
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <BaseLayout styles={pageStyles}>
      <SvgComponent variant="squid" width={logoWidth} height={logoHeight} />
      <div className="btn-homepage">
        <Button>Iniciar</Button>
      </div>
      
    </BaseLayout>
  );
};
