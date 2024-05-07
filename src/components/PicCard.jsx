import { Card } from "antd";

export default function PicCard() {
  const { Meta } = Card;

  return (
    <div className="flex justify-around flex-wrap my-10">
      <Card
        style={{ width: 300, height: 350 }}
        cover={
          <img
            alt="example"
            src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo2.jpeg"
          />
        }
      >
        <Meta title="卡片封面" />
      </Card>
      <Card
        style={{ width: 300, height: 350 }}
        cover={
          <img
            alt="example"
            src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo2.jpeg"
          />
        }
      >
        <Meta title="卡片封面" />
      </Card>
      <Card
        style={{ width: 300, height: 350 }}
        cover={
          <img
            alt="example"
            src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo2.jpeg"
          />
        }
      >
        <Meta title="卡片封面" />
      </Card>
      <Card
        style={{ width: 300, height: 350 }}
        cover={
          <img
            alt="example"
            src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo2.jpeg"
          />
        }
      >
        <Meta title="卡片封面" />
      </Card>
      <Card
        style={{ width: 300, height: 350 }}
        cover={
          <img
            alt="example"
            src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo2.jpeg"
          />
        }
      >
        <Meta title="卡片封面" />
      </Card>
    </div>
  );
}
