import React from 'react';
import { Mail, FileText, Users } from 'lucide-react';

const ContactFooter = () => {
    return (
        <footer className="bg-card text-card-foreground py-20 px-4">
            <div className="container mx-auto flex flex-col items-center text-center gap-10">
                <h3 className="text-[2.25rem] leading-[1.3] font-bold text-text-primary">
                    Thanks for stopping by, let's chat!
                </h3>

                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-base text-text-secondary">
                    <a
                        href="mailto:tingtingluo.ux@gmail.com"
                        className="flex items-center gap-2.5 transition-colors hover:text-text-primary hover:underline"
                    >
                        <Mail className="w-5 h-5 flex-shrink-0" />
                        <span>tingtingluo.ux@gmail.com</span>
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1tcaYx7AKCvV2_ijayDLl0jxvXJcs-gx7/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 transition-colors hover:text-text-primary hover:underline"
                    >
                        <FileText className="w-5 h-5 flex-shrink-0" />
                        <span>Resume</span>
                    </a>

                    <div className="flex items-center gap-2.5">
                        <Users className="w-5 h-5 flex-shrink-0" />
                        <div className="flex items-center gap-2.5">
                            <a
                                href="https://www.linkedin.com/in/tingting-luo-uiux/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-text-primary hover:underline"
                            >
                                Linkedin
                            </a>
                            <span className="select-none text-muted-foreground">|</span>
                            <a
                                href="https://www.instagram.com/afloater.art/?img_index=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-text-primary hover:underline"
                            >
                                Instagram
                            </a>
                            <span className="select-none text-muted-foreground">|</span>
                            <a
                                href="https://www.youtube.com/@TingtingLuo-UX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-text-primary hover:underline"
                            >
                                Youtube
                            </a>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-text-secondary">
                    ©All rights reserved - Tingting Luo 2025
                </p>
            </div>
        </footer>
    );
};

export default ContactFooter;