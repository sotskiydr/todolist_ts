import React, {useCallback, useEffect} from 'react';
import {createPortal} from 'react-dom';
import {useAppDispatch} from "../../store/hooks/redux";
import {changeModalWindowState} from '../../store/reducers/ActionCreators'
import styles from './ModalWindow.module.scss';

interface ChildrenType {
    children: JSX.Element;
    action: string
}

const ModalWindow = ({children, action}: ChildrenType) => {
    const dispatch = useAppDispatch()
    const modalRoot = document.querySelector('#modal-root') as HTMLElement;
    const handleKeyDown = useCallback(
      (e: any) => {
          if (e.code === 'Escape') {
              dispatch(changeModalWindowState(false, action));
          }
          if (e.target === e.currentTarget) {
              dispatch(changeModalWindowState(false, action));
          }
      },
      [false],
    );
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown, changeModalWindowState]);

    return createPortal(
      <div className={styles.Overlay} onClick={handleKeyDown}>
          <div className={styles.Modal}>{children}</div>
      </div>,
      modalRoot,
    );
};

export default ModalWindow;