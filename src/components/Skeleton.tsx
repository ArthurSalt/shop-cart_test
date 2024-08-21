import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = (props) => (
<div className="skeleton">
    <ContentLoader
      speed={2}
      width={220}
      height={420}
      viewBox="0 0 220 420"
      backgroundColor="#c7c7c7"
      foregroundColor="#858585"
      {...props}
    >
      <rect x="0" y="5" rx="6" ry="6" width="200" height="220" />
      <rect x="20" y="230" rx="4" ry="4" width="160" height="12" />
      <rect x="50" y="250" rx="4" ry="4" width="100" height="8" />
      <rect x="0" y="265" rx="6" ry="6" width="197" height="64" />
      <rect x="-2" y="340" rx="0" ry="0" width="56" height="20" />
      <rect x="101" y="340" rx="8" ry="8" width="96" height="20" />
    </ContentLoader>
</div>
)

export default Skeleton

