import { connect } from 'dva';
import router from 'umi/router';
import styles from './page.css';
import createSharedDva from '../../createSharedDva';

const app = createSharedDva();

function App(props) {
  return (
    <div className={styles.normal}>
      <h2>{props.text}</h2>
      <div
        onClick={() => {
          router.goBack();
        }}
      >
        Back
      </div>
    </div>
  );
}

const ConnectedApp = connect(state => {
  return {
    text: state.global.text,
  };
})(App);

app.router(() => <ConnectedApp />);

export default app.start();
