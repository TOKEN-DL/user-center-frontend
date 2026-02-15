import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright="Powered by Ant Desgin"
      links={[
        {
          key: 'happle',
          title: '时雨快乐屋',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/>曹时雨 GitHUB</>,
          href: 'https://github.com/TOKEN-DL',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '景晖苑',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
