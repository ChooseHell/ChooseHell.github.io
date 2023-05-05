import React from 'react';
// import { Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Page from '../components/Template/Page';

// uses babel to load contents of file
const markdown = raw('../data/WarCatan.md');

// const count = markdown.split(/\s+/)
//   .map((s) => s.replace(/\W/g, ''))
//   .filter((s) => s.length).length;
const { PUBLIC_URL } = process.env;
// Make all hrefs react router links
// const LinkRenderer = ({ ...children }) => <Link {...children} />;

const WarCatan = () => (
  <div>
    <img src={`${PUBLIC_URL}/images/WarCatanIcon-1.png`} alt="" id="header_image" />
    <Page markSource={markdown} title="War Catan" sub="Steal Destroy Pillage" />
  </div>
);

export default WarCatan;
