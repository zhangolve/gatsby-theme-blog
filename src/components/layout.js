import * as React from "react"
import { Helmet } from "react-helmet"
import { css, Themed } from "theme-ui"
import Header from "./header"
import useBlogThemeConfig from "../hooks/configOptions"
import './fonts.css';


const Layout = ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig
  return (
    <Themed.root>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <Header {...props} />
      <div>
        <div
          css={css({
            maxWidth: 768,
            mx: `auto`,
            px: 3,
            py: 4,
          })}
        >
          {children}
        </div>
      </div>
    </Themed.root>
  )
}

export default Layout
