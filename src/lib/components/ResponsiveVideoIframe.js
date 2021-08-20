import React from 'react';
import './styles/styles.css';

const ResponsiveVideoIframe = ({url, allowfullscreen = true, width="560", height="315", title=""}) => {
  return (
    <div className="embed-player">
      <iframe  width={width} height={height} src={url} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen={allowfullscreen}></iframe>
    </div>
  );
}
 
export default ResponsiveVideoIframe;