import React from 'react';
// import { Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Page from '../components/Template/Page';

// uses babel to load contents of file
const markdown = raw('../data/Pokemon.md');

// const count = markdown.split(/\s+/)
//   .map((s) => s.replace(/\W/g, ''))
//   .filter((s) => s.length).length;

// Make all hrefs react router links
// const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Pokemon = () => (
  <Page markSource={markdown} title="Pokemon Glacier and Aurora" sub="Battle for Freedom">
    <a style={{ margin: '20px 20px 0px 0px' }} href="Release-20230501T230344Z-001.zip" className="button" download>Download</a>
    <a style={{ margin: '20px 20px 0px 0px' }} href="https://docs.google.com/forms/d/e/1FAIpQLSeGWsG9ZwnxycdSpN0Z4ZGz0qBDmPNHsm4JLAydV6niMVltKQ/viewform?usp=sf_link" className="button">Post Game Play Form</a>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfuyWTnafDuLPB3IkPwWL4CCoypaUTDC7-Wh4_nu29rsIeqwA/viewform?usp=sf_link" className="button">Bug Report Form</a>
  </Page>
);

export default Pokemon;
