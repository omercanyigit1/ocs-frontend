import React, {useEffect} from 'react';
import {Spin, Result} from 'antd';
import {getList, getPhoto, getResult} from "../../appRedux/actions";
import {connect} from "react-redux";
import PageList from "../../components/PageList";

const HomePage = (props) => {
    const {list, loading, error, getList, getPhoto, getResult, photos, results} = props;

    useEffect(() => {
        // We can fetch the characters when the component called.
        getList();
        getPhoto();
        getResult();
        // I put the hash value here because every hash value can change data will be update and work. We do not need to refresh the page.
    }, []);

    if (error) {
        return (
            <Result
                status="error"
                title={`${error.message}`}
                extra={null}
            />
        )
    }

    return (
        <div>
            <Spin spinning={loading}>
                <div className={"section-list-item"}>
                    <div className="container">
                        <PageList items={list} loading={loading} photos={photos} results={results} />
                    </div>
                </div>
            </Spin>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.list.loading,
        error: state.list.error,
        list: state.list.list,
        photos: state.list.photos,
        results: state.list.results
    }
}

export default connect(mapStateToProps, {getList, getPhoto, getResult})(HomePage);
