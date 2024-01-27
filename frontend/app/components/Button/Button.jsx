import React from 'react'
import styles from '@/app/components/Button/button.module.sass'
import Link from 'next/link'
export default function Button(props) {
    if (props.url) {
        return (
            <Link href={props.url} className={styles.button}>
                {props.children}
            </Link>
        )

    }

    return (
        <div>
            <button title={props.name} className={styles.button}>
                {props.children}
            </button>
        </div>
    )
}
