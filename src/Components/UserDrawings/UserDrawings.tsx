import PreloaderCircle from '../Preloader/PreloaderCircle'
import { SearchFormRedux } from './SearchForm'

interface IUserDrawings {
    loading: boolean
    onSubmit: any
    handleDiscard: () => void
}

const UserDrawings: React.FC<IUserDrawings> = props => {

    return (
        <div className="row flexGrow m0">
            <div className="col m12 l2 px1 mvh20">
                <SearchFormRedux onSubmit={props.onSubmit} handleDiscard={props.handleDiscard} />
            </div>
            {props.loading ?
                <PreloaderCircle /> :
                <div className="row col m12 l10 m0 overflowY" >
                    {props.children}
                </div>}
        </div>
    )
}

export default UserDrawings
