import React from 'react'
import './Page1.scss';
import { useMediaQuery } from 'react-responsive'

function Page1() {

  const Widedesktop = ({ children }) => {
    const isWideDesktop = useMediaQuery({ minWidth: 1280 })
    return isWideDesktop ? children : null
  }
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 })
    return isDesktop ? children : null
  }
  const Laptop = ({ children }) => {
    const isLaptop = useMediaQuery({ minWidth: 960, maxWidth: 1023 })
    return isLaptop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 959 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

  return (
    <div className="Page1">
      <div className="box">
        <Widedesktop><p>넓은 데스크탑 (너비 1280px 보다 같거나 큼)</p></Widedesktop>
        <Desktop><p>데스크탑 (너비 1024px 보다 같거나 큼)</p></Desktop>
        <Laptop><p>노트북 (너비 960px 보다 같거나 큼)</p></Laptop>
        <Tablet><p>태블릿 (너비 768px 보다 같거나 큼)</p></Tablet>
        <Mobile><p>모바일 (너비 768px 보다 작음)</p></Mobile>
      </div>
    </div>
  );
}

export default Page1;