import type {ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  Img: string;
  description: ReactNode;
};

export const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.features.sample1.title',
      message: '汉语教学',
    }),
    Img: require('@site/static/img/sample1.jpg').default,
    description: (
      <>
        <Translate>
          {/* 随时随地学习中文。在我们的帮助下，您可以在计算机、手机上开始课堂，
          无论您身在何处——无论您是在地铁上、在餐厅还是在床上——都可以继续学习。 */}
          homepage.features.sample1.content
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.sample2.title',
      message: '跨境电商',
    }),
    Img: require('@site/static/img/sample2.jpg').default,
    description: (
      <>
        <Translate>
          {/* 专业的跨境电商服务提供商，致力于帮助中国工厂将优质产品推向非洲市场。
          结合高效的供应链管理和海外仓布局，为客户提供一站式跨境电商解决方案。 */}
          homepage.features.sample2.content
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.sample3.title',
      message: '非洲考察',
    }),
    Img: require('@site/static/img/sample3.jpg').default,
    description: (
      <>
        <Translate>
          {/* 推出"非洲出海考察交流"服务，带领中国企业工厂老板深入非洲市场，
          实地考察当地商业环境、市场需求与政策法规，助力把握非洲发展机遇。 */}
          homepage.features.sample3.content
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.sample4.title',
      message: '非洲物流',
    }),
    Img: require('@site/static/img/sample4.jpg').default,
    description: (
      <>
        <Translate>
          {/* 提供非洲物流一站式服务，涵盖海运、空运、陆运及海外仓配送，
          确保货物安全快速送达。布局非洲多地海外仓，实现本地化快速交付。 */}
          homepage.features.sample4.content
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.sample5.title',
      message: '其他合作',
    }),
    Img: require('@site/static/img/sample5.jpg').default,
    description: (
      <>
        <Translate>
          {/* 致力于拓展多元合作，携手各方共创跨境贸易新机遇。
          与非洲当地团队合作，与行业协会共享资源，积极进行文化交流。 */}
          homepage.features.sample5.content
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: 'homepage.features.sample6.title',
      message: '案例展示',
    }),
    Img: require('@site/static/img/sample6.jpg').default,
    description: (
      <>
        <Translate>
          {/* 展示我们的成功案例和项目成果，通过照片和文字详细介绍
          我们在各个业务板块的卓越表现和客户满意度。 */}
          homepage.features.sample6.content
        </Translate>
      </>
    ),
  },
];