import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={require('@site/static/img/logo.jpg').default} className={styles.logo} alt="Abshir Express" />
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImageContainer}>
            <div style={{ position: 'relative', width: '90%', margin: '0 auto' }}>
              <img src={require('@site/static/img/founder.jpg').default} style={{ width: '100%' }} alt="Abshir Express" />
              <p style={{
                position: 'absolute',
                bottom: '0',
                left: '20px',
                right: '20px',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '15px',
                borderRadius: '8px',
                margin: 0,
                fontSize: '14px',
                lineHeight: '1.4'
              }}>
                {/* Dr.Abshir Isse<br />
                小布汉语创始人<br />
                Abshir Express创始人<br />
                天津大学博士<br />
                全网60万粉丝 */}
                <Translate> 
                  homepage.about.founder
                </Translate>
              </p>
            </div>
          </div>
          <div className={styles.aboutTextContainer}>
            <center><h1>
              {/* 关于Abshir Express */}
              <Translate>
                homepage.about.title
              </Translate>
            </h1></center>
            <p className={styles.aboutText}>
              <Translate>
                {/* Abshir Express是由连续创业者Dr. Abshir Isse创立的跨境电子商务综合服务平台。Dr. Abshir Isse作为天津大学博士，凭借其深厚的学术背景与全球化视野，致力于推动中小企业的国际化发展。其创新的教育实践亦备受认可——自2024年5月起，他通过多语种中文教学视频在全球范围内获得广泛关注，累计播放量突破4亿次，覆盖170个国家及地区，累计服务学员超2900名，彰显了跨文化交流与数字化教育的深度融合。
              作为B2B跨境电商领域的开拓者，Abshir Express专注于为全球中小型企业提供端到端的数字化贸易解决方案。平台以"高效连接、赋能增长"为核心理念，构建了涵盖跨境采购、智能仓储与物流、跨境支付与金融服务、全链路客户支持、风险管控体系、海关清关及国际汇款等核心业务的全生态服务链。通过技术创新与资源整合，Abshir Express致力于打破传统贸易壁垒，助力中国制造商精准对接全球市场，同时为海外企业提供合规、便捷的跨境贸易通道，推动全球供应链的数字化升级与可持续发展。
              平台采用智能化运营模式，依托大数据分析与人工智能技术，为中小企业提供精准的商业洞察与市场拓展策略，持续为全球贸易生态注入创新动能。 */}
                homepage.about.content
              </Translate>
            </p>
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
