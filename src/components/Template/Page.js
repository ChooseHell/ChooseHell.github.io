import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import remarkGfm from 'remark-gfm';

import Main from '../../layouts/Main';

// const count = markdown.split(/\s+/)
//     .map((s) => s.replace(/\W/g, ''))
//     .filter((s) => s.length).length;

// Make all hrefs react router links
// const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Page = ({
  children, markSource, title, sub,
}) => (
  <Main
    title={title}
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading">{title}</h2>
          <p>{sub}</p>
        </div>
      </header>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        // renderers={{
        //   Link: LinkRenderer,
        // }}
        // escapeHtml={false}
      >
        {markSource}
      </ReactMarkdown>
      <div>
        <a style={{ margin: '20px 20px 0px 0px' }} href="https://ko-fi.com/choosehell" className="button">Donate</a>
        { children }
      </div>
    </article>
  </Main>
);

Page.propTypes = {
  markSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Page;
