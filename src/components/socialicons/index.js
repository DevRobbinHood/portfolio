import './style.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { socialprofils } from '../../content_option';

export const Socialicons = () => {
    return (
        <div className='stick_follow_icon'>
            <ul>
                {socialprofils.github && (
                    <li>
                        <a href={socialprofils.github} target='_blank'>
                            <FaGithub />
                        </a>
                    </li>
                )}

                {socialprofils.linkedin && (
                    <li>
                        <a href={socialprofils.linkedin} target='_blank'>
                            <FaLinkedin />
                        </a>
                    </li>
                )}
            </ul>

            <p>Follow Me</p>
        </div>
    );
};
