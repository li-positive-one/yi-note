import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { List, ListItem } from '@material-ui/core';
import BookmarkItem from './BookmarkItem';

const Bookmarks = () => {
  const { t } = useTranslation('options');
  const { bookmarks } = useStoreState(state => state.bookmarks);
  const {
    app: { setTitle },
    bookmarks: { fetchBookmarks }
  } = useStoreActions(actions => actions);

  useEffect(() => {
    setTitle(t('bookmarks.title'));
    if (!bookmarks.length) {
      fetchBookmarks();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <List>
      {bookmarks.map(({ id, title, description, url, image, selected }) => {
        return (
          <ListItem key={id}>
            <BookmarkItem
              id={id}
              title={title}
              description={description}
              url={url}
              image={image}
              selected={selected}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default Bookmarks;
