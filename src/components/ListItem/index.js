import React from 'react';
import { Card, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {useHistory} from 'react-router-dom';

const ListItem = ({item, photo, total}) => {
    const history = useHistory();

    return (
        <Card className={"grid-el"}
              actions={null}
              title={null}
              bordered={false}
              cover={
                  <Avatar size={'large'}
                          gap={30}
                          shape="square"
                          icon={<UserOutlined />}
                          onClick={() => {
                              history.push(`detail/${item.athlete_id}`)
                          }}
                          src={(photo) ? `data:${photo.mime_type};base64,${photo.photo}` : ''}
                  />
              }
        >
            <h4>
                <Button type="primary" shape="circle"  size={'small'} readOnly>
                    {total}
                </Button>
                {" "} - {`${item.name} ${item.surname} `}</h4>
        </Card>
    );
};


export default ListItem;
