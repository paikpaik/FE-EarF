import { useState } from 'react';
import HeartReaction from '../common/HeartReaction';
import styles from './BoastItemCopy.module.scss';
import background from 'assets/images/logoBoast.png';
import { BoastPost } from 'types/types';
import getPostingTime from 'utils/getPostingTime';
import CommentUserProfile from '../comment/CommentUserProfile';

function BoastItemCopy({
  _id,
  id,
  name,
  profileImage,
  checkedBadge,
  tag,
  imageUrl,
  title,
  content,
  likeIds,
  date,
}: Omit<BoastPost, 'shareStatus' | 'createdAt' | 'updatedAt' | '__v'>) {
  const [isActive, setIsActive] = useState(false);
  const [likeIt, setLikeIt] = useState(false);

  const handleLikeIt = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setLikeIt((prevLikeIt) => !prevLikeIt);
  };

  const handleImgClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <div className={styles.postContainer}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className={styles.backgroundImg}>
        <img src={background} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.userProfile}>
            <CommentUserProfile profileImage={profileImage} checkedBadge={checkedBadge} />
            <p className={styles.user}>
              <span className={styles.useName}>{name}</span> 님의
              <span className={styles.time}> {getPostingTime(date)}</span> 기록
            </p>
          </div>
          <p className={styles.userContent}>
            <h2>{title}</h2>
            <span> {content}</span>
          </p>
          <HeartReaction postId={_id} likeIds={likeIds} />
        </div>
      </div>
      <img
        src={imageUrl}
        className={`${styles.imgContainer} ${isActive ? styles.active : ''}`}
        onClick={handleImgClick}
      />
    </div>
  );
}

export default BoastItemCopy;
