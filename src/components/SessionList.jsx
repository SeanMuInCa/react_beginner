import { List } from "antd";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const SessionList = (props) => {
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);
  const data = [
    {
      sessionId: "1",
      date: "2024-05-22",
      end: true,
    },
    {
      sessionId: "2",
      date: "2024-05-23",
      end: true,
    },
    {
      sessionId: "3",
      date: "2024-05-24",
      end: true,
    },
    {
      sessionId: "4",
      date: "2024-05-25",
      end: false,
    },
  ];

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    //get data
  };
  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 300,
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                title={"Session id: " + item.sessionId}
                description={item.date}
              />
              <div>{item.length}</div>
              <div
                onClick={() => props.chooseSession(item.sessionId, item.end)}
              >
                {item.end ? "Detail" : "Continue"}
              </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default SessionList;
