import {ReactNode} from 'react';
import  s from './PageWrapper.module.css'
import { Link, NavLink } from 'react-router-dom';
import classes from 'classnames'
import { ROUTES } from 'router/routes';

export const PageWrapper = ({ children }: { children: ReactNode }) => {
    return (
    
    <div>
        <div className={s.header_left}><img className='logo'src="data:image/svg+xml,%3Csvg width='135' height='95' viewBox='0 0 135 95' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M92.06 65.1C90.4733 65.1 89.0933 64.8133 87.92 64.24C86.7467 63.6533 85.8467 62.8267 85.22 61.76C84.5933 60.6933 84.28 59.4533 84.28 58.04C84.28 56.08 84.6467 54.34 85.38 52.82C86.1267 51.3 87.1333 50.1267 88.4 49.3C89.6667 48.46 91.0733 48.04 92.62 48.04C94.06 48.04 95.1533 48.4133 95.9 49.16C96.6467 49.8933 97.02 50.8667 97.02 52.08C97.02 52.8933 96.8733 53.5467 96.58 54.04C96.3 54.5333 95.8933 54.78 95.36 54.78C94.9867 54.78 94.6933 54.6933 94.48 54.52C94.2667 54.3467 94.16 54.0933 94.16 53.76C94.16 53.64 94.1867 53.42 94.24 53.1C94.32 52.7 94.36 52.38 94.36 52.14C94.36 50.9267 93.7133 50.32 92.42 50.32C91.54 50.32 90.7 50.6067 89.9 51.18C89.1 51.7533 88.4533 52.6 87.96 53.72C87.4667 54.8267 87.22 56.1467 87.22 57.68C87.22 59.28 87.6667 60.52 88.56 61.4C89.4533 62.2667 90.7733 62.7 92.52 62.7C93.3867 62.7 94.26 62.5933 95.14 62.38C96.0333 62.1533 97.02 61.8133 98.1 61.36C98.3 61.28 98.4667 61.24 98.6 61.24C98.8133 61.24 98.9733 61.32 99.08 61.48C99.1867 61.64 99.24 61.8467 99.24 62.1C99.24 62.9133 98.8 63.5133 97.92 63.9C96.9733 64.3133 95.9867 64.62 94.96 64.82C93.9467 65.0067 92.98 65.1 92.06 65.1ZM103.351 65.1C102.231 65.1 101.384 64.7933 100.811 64.18C100.238 63.5533 99.9509 62.72 99.9509 61.68C99.9509 61.0933 100.038 60.38 100.211 59.54L101.451 53.82C101.478 53.7133 101.538 53.42 101.631 52.94C101.738 52.46 101.791 51.94 101.791 51.38C101.791 51.06 101.724 50.82 101.591 50.66C101.471 50.5 101.304 50.42 101.091 50.42C100.691 50.42 100.224 50.6133 99.6909 51C99.1576 51.3733 98.5976 51.9533 98.0109 52.74C97.8243 52.9933 97.6176 53.12 97.3909 53.12C97.2043 53.12 97.0376 53.0333 96.8909 52.86C96.7576 52.6733 96.6909 52.4667 96.6909 52.24C96.6909 51.8267 96.8776 51.36 97.2509 50.84C98.6109 48.9733 100.204 48.04 102.031 48.04C102.844 48.04 103.478 48.2867 103.931 48.78C104.398 49.2733 104.631 50 104.631 50.96C104.631 51.64 104.584 52.2667 104.491 52.84C104.398 53.4133 104.238 54.1933 104.011 55.18L103.191 58.84C103.164 58.96 103.118 59.1733 103.051 59.48C102.984 59.7867 102.931 60.08 102.891 60.36C102.851 60.6267 102.831 60.8933 102.831 61.16C102.831 61.5867 102.951 61.9267 103.191 62.18C103.431 62.4333 103.771 62.56 104.211 62.56C105.011 62.56 105.818 62.1333 106.631 61.28C107.458 60.4267 108.218 59.0533 108.911 57.16C109.618 55.2533 110.164 52.82 110.551 49.86C110.644 49.18 110.778 48.7067 110.951 48.44C111.138 48.1733 111.491 48.04 112.011 48.04C112.478 48.04 112.824 48.18 113.051 48.46C113.278 48.74 113.391 49.1933 113.391 49.82C113.391 50.18 113.344 50.6533 113.251 51.24C113.171 51.8267 113.044 52.6467 112.871 53.7C112.511 55.74 112.224 57.6133 112.011 59.32C111.904 60.0933 111.851 60.6667 111.851 61.04C111.851 61.5867 111.971 62.0067 112.211 62.3C112.464 62.58 112.798 62.72 113.211 62.72C113.651 62.72 114.078 62.5733 114.491 62.28C114.918 61.9867 115.418 61.5 115.991 60.82C116.151 60.6333 116.331 60.54 116.531 60.54C116.704 60.54 116.838 60.62 116.931 60.78C117.038 60.94 117.091 61.16 117.091 61.44C117.091 61.96 116.964 62.3733 116.711 62.68C116.018 63.52 115.331 64.1333 114.651 64.52C113.971 64.9067 113.258 65.1 112.511 65.1C111.404 65.1 110.558 64.82 109.971 64.26C109.384 63.6867 109.091 62.9467 109.091 62.04C109.091 61.5333 109.198 60.5467 109.411 59.08C108.744 61.04 107.898 62.5333 106.871 63.56C105.858 64.5867 104.684 65.1 103.351 65.1ZM130.964 53.08C130.964 54.2133 130.671 55.2533 130.084 56.2C129.497 57.1467 128.644 57.92 127.524 58.52C126.404 59.12 125.071 59.4733 123.524 59.58L122.664 64.4C122.331 66.2533 121.424 67.18 119.944 67.18C119.131 67.18 118.377 66.94 117.684 66.46C117.004 65.98 116.457 65.2467 116.044 64.26C115.631 63.2733 115.424 62.06 115.424 60.62C115.424 57.9133 115.857 55.62 116.724 53.74C117.604 51.8467 118.777 50.4333 120.244 49.5C121.724 48.5533 123.351 48.08 125.124 48.08C126.377 48.08 127.437 48.3 128.304 48.74C129.184 49.18 129.844 49.78 130.284 50.54C130.737 51.2867 130.964 52.1333 130.964 53.08ZM123.884 57.52C126.617 57.1733 127.984 55.7533 127.984 53.26C127.984 52.38 127.691 51.6667 127.104 51.12C126.531 50.56 125.637 50.28 124.424 50.28C123.051 50.28 121.851 50.7133 120.824 51.58C119.811 52.4467 119.024 53.6533 118.464 55.2C117.917 56.7333 117.644 58.4867 117.644 60.46C117.644 61.2867 117.724 62.02 117.884 62.66C118.057 63.3 118.271 63.8 118.524 64.16C118.791 64.5067 119.044 64.68 119.284 64.68C119.617 64.68 119.871 64.22 120.044 63.3L120.704 59.52C120.184 59.44 119.957 59.4067 120.024 59.42C119.624 59.3533 119.364 59.2333 119.244 59.06C119.124 58.8733 119.064 58.64 119.064 58.36C119.064 58.0667 119.144 57.8333 119.304 57.66C119.477 57.4867 119.711 57.4 120.004 57.4C120.137 57.4 120.237 57.4067 120.304 57.42C120.624 57.4733 120.871 57.5067 121.044 57.52C121.217 56.48 121.464 55.0867 121.784 53.34C121.864 52.8867 122.044 52.5667 122.324 52.38C122.617 52.18 122.957 52.08 123.344 52.08C123.784 52.08 124.097 52.1667 124.284 52.34C124.484 52.5 124.584 52.76 124.584 53.12C124.584 53.3333 124.571 53.5067 124.544 53.64L123.884 57.52Z' fill='white'/%3E%3Cpath d='M66.2271 65.7068L23.7583 65.7068C13.2901 52.7096 12.6388 32.2461 22.2401 18.676C26.3567 26.3369 29.9336 32.3018 33.2493 36.4617C36.8805 41.0174 40.4788 43.7657 44.4063 43.7757C48.3259 43.7857 51.9707 41.0653 55.6946 36.5226C59.113 32.3526 62.8364 26.3505 67.1461 18.6137C76.9176 32.0799 76.5886 52.5823 66.2271 65.7068Z' stroke='white' stroke-width='4'/%3E%3Ccircle cx='44'
         cy='18' r='12' stroke='white' stroke-width='4'/%3E%3C/svg%3E " alt="" />
        <nav className={s.ul}>
            <NavLink to={ROUTES.ROOT} className={({ isActive }) => classes(s.li, { [s.active]: isActive })}>главная</NavLink>

        <NavLink to={ROUTES.CATALOG} className={({ isActive }) => classes(s.li, { [s.active]: isActive })}>каталог</NavLink>
        <NavLink to={ROUTES.INFO} className={({ isActive }) => classes(s.li, { [s.active]: isActive })}>о нас</NavLink>
        <NavLink to={ROUTES.HELP} className={({ isActive }) => classes(s.li, { [s.active]: isActive })}>помощь</NavLink>
        </nav> </div>
        
        <div >{children}</div>
        <div className={s.footer}><div className={s.footer__text}>© 2024           все права защищены</div></div>
        </div>
        )
  };

