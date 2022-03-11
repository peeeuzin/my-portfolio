/* eslint-disable no-template-curly-in-string */
import React from 'react';
import './App.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styles from './App.module.scss';
import theme from './theme/theme';
import { TerminalComponent } from './components/Terminal';

function App() {
    const codeString =
        "import pedrinfx from 'pedrinfx';\n\nconst name = pedrinfx.name;\nconst age = pedrinfx.age;\nconst skills = pedrinfx.skills;\n\nconsole.log(`pedrinfx's name: ${name}`)\nconsole.log(`pedrinfx's age: ${age}`)\nconsole.log(`pedrinfx's skills: ${skills}`)\n\nconsole.log(`${name} is current learning: ${pedrinfx.getCurrentLearning()}`)";

    return (
        <div className={styles.wrapper}>
            <div className={styles.center}>
                <div>
                    <h1
                        style={{
                            fontSize: 40,
                        }}
                    >
                        What{"'"}s up,{' '}
                        <p
                            style={{
                                display: 'inline',
                                color: '#9264f5',
                                textAlign: 'center',
                            }}
                        >
                            {'<Developer />'}
                        </p>
                        ? 👋
                    </h1>
                </div>
                <div className={styles.highlighter}>
                    <div className={styles.header}>
                        <div
                            style={{
                                background: '#E96379',
                                width: 12,
                                height: 12,
                                borderRadius: 99,
                                marginRight: 5,
                            }}
                        />
                        <div
                            style={{
                                background: '#E7DE79',
                                width: 12,
                                height: 12,
                                borderRadius: 99,
                                marginRight: 5,
                            }}
                        />
                        <div
                            style={{
                                background: '#67E480',
                                width: 12,
                                height: 12,
                                borderRadius: 99,
                                marginRight: 5,
                            }}
                        />
                    </div>
                    <div className={styles.content}>
                        <SyntaxHighlighter
                            language="typescript"
                            style={theme}
                            customStyle={{
                                background: '#000101',
                            }}
                        >
                            {codeString}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <TerminalComponent />
                </div>
            </div>
        </div>
    );
}

export { App };
