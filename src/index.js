require("./styles/styles.css");

const responsiveVideoIframe = (url, allowfullscreen = true, width="560", height="315" ) => (
  <div class="embed-player">
    <iframe  width={width} height={height} src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen={allowfullscreen}></iframe>
  </div>
)

module.exports = { responsiveVideoIframe }