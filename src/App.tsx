/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import './App.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styles from './App.module.scss';
import theme from './theme/theme';
import { TerminalComponent } from './components/Terminal';

function App() {
    const codeString = `
import { name, age, skills, getCurrentLearning } from 'peeeuzin';

console.log(\`peeeuzin's name: \${name}\`);
console.log(\`peeeuzin's age: \${age}\`);
console.log(\`peeeuzin's skills: \${skills}\`);

console.log(\`\${name} is current learning: \${getCurrentLearning()}\`);
`;

    const myGithub = 'https://github.com/peeeuzin';

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <a href={myGithub}>
                    <AiFillGithub
                        size={40}
                        style={{
                            color: '#fff',
                        }}
                    />
                </a>
            </div>

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
            </div>
            <div className={styles.content}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <div className={styles.highlighter}>
                        <div className={styles.highlighter_header}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
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

                            <div
                                style={{
                                    textAlign: 'center',
                                    width: '85%',
                                    opacity: 0.5,
                                    fontSize: 12,
                                }}
                            >
                                index.js
                            </div>
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

                    <TerminalComponent />
                </div>
            </div>
        </div>
    );
}

export { App };
