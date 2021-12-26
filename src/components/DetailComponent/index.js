import React, {useEffect} from 'react';
import {PageHeader, Skeleton, Row, Col, Divider} from 'antd';
import {useHistory} from 'react-router-dom';
import {connect} from "react-redux";
import ReactMarkdown from 'react-markdown'
import {getGame} from "../../appRedux/actions";
import gold from './../../assets/images/medal_gold.png';
import silver from './../../assets/images/medal_silver.png';
import bronze from './../../assets/images/medal_bronze.png';

const DetailComponent = (props) => {
    const history = useHistory();
    const {item, photo, result, games, loading, getGame} = props;

    useEffect(() => {
        getGame();
    }, [])

    return (
        <Skeleton loading={loading}>
            <PageHeader
                className="site-page-header"
                onBack={() => history.push('/')}
                title={(item) ? `${item.name} ${item.surname} details` : null}
                subTitle={null}
            />
            <Row gutter={[30, 30]}>
                <Col span={8}>
                    <div className={"detail-left-side"}>
                        <img src={(photo) ? `data:${photo.mime_type};base64,${photo.photo}` : ''}
                             style={{maxWidth: '100%'}}
                             width={"100%"}
                             alt={(item) ? `${item.name} ${item.surname}` : null}
                        />
                        <Divider />

                        <div>
                            <p><b>Birthday: </b> <span>{(item) ? item.date_of_birth : null}</span></p>
                            <Divider />
                            <p><b>Height: </b><span>{(item) ? item.height : null} cm</span></p>
                            <Divider />
                            <p><b>Weight: </b> <span>{(item) ? item.weight : null} kg</span></p>
                        </div>
                        <Divider />

                        {result && result.map((item) => {
                            let game = games.find(element => element.game_id === item.game_id);
                            return (
                                <div key={item._id}>
                                    <p><b>Game</b>: {(game) ? game.city : null} - {(game) ? game.year : null}</p>
                                    <Row>
                                        <Col span={8}>
                                            <p><img src={gold} alt=""/>: {item.gold}</p>
                                        </Col>
                                        <Col span={8}>
                                            <p><img src={silver} alt=""/>: {item.silver}</p>
                                        </Col>
                                        <Col span={8}>
                                            <p><img src={bronze} alt=""/>: {item.bronze}</p>
                                        </Col>
                                    </Row>
                                    <Divider />
                                </div>
                            )
                        })}
                    </div>
                </Col>
                <Col span={16}>
                    <div className={"detail-right-side"}>
                        <ReactMarkdown>{(item) ? item.bio : null}</ReactMarkdown>
                    </div>
                </Col>
            </Row>
        </Skeleton>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.list.loading,
        error: state.list.error,
        games: state.list.games
    }
}

export default connect(mapStateToProps, {getGame})(DetailComponent);

