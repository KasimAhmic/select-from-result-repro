import { PostList } from './components/PostList';
import { PostsProvider } from './providers/PostsProvider';
import { tss } from './tss';

const useStyles = tss.create((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(1),
    width: '100%',
  },
}));

function App() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <PostsProvider />
      <PostList />
    </div>
  );
}

export default App;
