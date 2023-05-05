import React from 'react';
// import { Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Page from '../components/Template/Page';

// uses babel to load contents of file
const markdown = raw('../data/Valor.md');

// const count = markdown.split(/\s+/)
//   .map((s) => s.replace(/\W/g, ''))
//   .filter((s) => s.length).length;

// Make all hrefs react router links
// const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Valor = () => (
  <div>
    <Page markSource={markdown} title="Valor" sub="Fight like men once did">
      <a href="https://drive.google.com/drive/folders/15KmcDw4ckhbKmA60zd11-LG9RSlG869C?usp=sharing" className="button">Download</a>
    </Page>
  </div>
);

export default Valor;
