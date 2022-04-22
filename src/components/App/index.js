import {connect} from "react-redux";
import App from "./App";
import {createStructuredSelector} from "reselect";
import {player} from "../../store/playerReducer/selectors";
import {setPlayer} from "../../store/playerReducer/actions";
import {values} from "../../store/fieldReducer/selectors";
import {setValues} from "../../store/fieldReducer/actions";

const mapStateToProps = createStructuredSelector({
  player,
  values
})

const mapDispatchToProps = {
  setPlayer,
  setValues
}

export default connect(mapStateToProps, mapDispatchToProps)(App);