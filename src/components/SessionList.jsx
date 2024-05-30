import { List, Button } from "antd";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useSessionStore from "../store/useSession";
const SessionList = (props) => {
  const [loading, setLoading] = useState(false);
  const [state, action] = useSessionStore.useStore();
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
        dataLength={props.sessionData.length}
        next={loadMoreData}
        hasMore={props.sessionData.length < 50}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={props.sessionData}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              onClick={() => props.chooseSession(item.sessionId, item.end)}
            >
              <List.Item.Meta
                title={"Session id: " + item.sessionId}
                description={item.date}
              />
              <div>{item.length}</div>
              <div>{item.end ? "Detail" : "Continue"}</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default SessionList;
