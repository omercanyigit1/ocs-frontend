import React, {useEffect} from 'react';
import {Row, Col, Card, Space} from 'antd';
import {connect} from "react-redux";
import ListItem from './../ListItem';
import {getGame} from "../../appRedux/actions";
import logo from './../../assets/images/obs_logo.png';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

function sortGamesByYear(data) {
    let sortedData;
    sortedData = data.sort(function (a, b) {
        return a.year - b.year;
    })
    return sortedData;
}

function sortResultsByScore(data) {
    let sortedData;
    sortedData = data.sort(function (a, b) {
        return a.total - b.total;
    })
    return sortedData;
}

const PageList = (props) => {
    const {items, loading, photos, results, games, getGame} = props;
    let column = [];

    useEffect(() => {
        getGame();
    }, [getGame]);

    sortGamesByYear(games).reverse();
    sortResultsByScore(results).reverse();

    for (let i = 0; i < games.length; i++) {
        column.push(<Row key={games[i]._id} gutter={[15, 15]}>
            <Col span={24}>
                <Card>
                    <h3>
                        <Space>
                            <img src={logo} alt="" style={{maxHeight: 30}}/>
                            {games[i].city} {games[i].year}
                        </Space>
                    </h3>
                </Card>
            </Col>
            <Col span={24}>
                <div>
                    <ScrollingCarousel className={"scroll-carousel"} leftIcon={<LeftOutlined />} rightIcon={<RightOutlined />} show={3.5} slide={2} transition={0.5}>
                        {results && results.map((result) => {
                            let item = items.find(element => element.athlete_id === result.result.athlete_id);
                            let photo = (photos) ? photos.find(element => element.photo_id === item.photo_id) : null;

                            if (result.result.game_id === games[i].game_id) {

                                if (item) {
                                    return (
                                        <ListItem
                                            key={item._id}
                                            item={item}
                                            photo={photo}
                                            loading={loading}
                                            total={result.total}
                                        />
                                    )
                                }
                            }
                        })}
                    </ScrollingCarousel>
                </div>
        </Col>
    </Row>);
    }

    return (
        <div className="grid-item">
            {column}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.list.loading,
        error: state.list.error,
        games: state.list.games
    }
}

export default connect(mapStateToProps, {getGame})(PageList);
