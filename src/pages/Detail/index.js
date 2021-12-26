import React, {useEffect} from 'react';
import {Spin, Result, message} from 'antd';
import {getSelectedItem, getSelectedPhoto, getResultItem} from "../../appRedux/actions";
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';
import DetailComponent from "../../components/DetailComponent";

const DetailPage = (props) => {
    const params = useParams();
    const {loading, error, getSelectedItem, getSelectedPhoto, getResultItem, selectedItem, selectedPhoto, selectedResult} = props;

    useEffect(() => {
        // We can fetch the characters when the component called.
        getSelectedItem(params.athlete_id);
        getSelectedPhoto(params.athlete_id);
        getResultItem(params.athlete_id);

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
                        {
                            (!selectedItem[0] && !selectedPhoto[0] && !selectedResult) ? null :
                            <DetailComponent item={selectedItem[0]} photo={selectedPhoto[0]} result={selectedResult} loading={loading}/>
                        }
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
        selectedItem: state.list.selectedItem,
        selectedPhoto: state.list.selectedPhoto,
        selectedResult: state.list.selectedResult
    }
}

export default connect(mapStateToProps, {getSelectedItem, getSelectedPhoto, getResultItem})(DetailPage);
