import React from 'react';

import classes from './MusicAlbums.module.css';
import MusicItems from './MusicItems';

const MusicAlbums = (props) => {
  const musicItemList = props.productList.map((item) => (
    <MusicItems key={Math.random().toString()} item={item} />
  ));

  return (
    <div className={classes.div}>
      <h2>MUSIC</h2>
      <div className={classes.musicList}>{musicItemList}</div>
    </div>
  );
};

export default MusicAlbums;
