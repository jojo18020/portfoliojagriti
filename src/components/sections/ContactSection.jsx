import React from 'react';
import TerminalPrompt from '../common/TerminalPrompt';
import Card from '../common/Card';
import Chip from '../common/Chip';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { contactDetails, heroContent } from '../../data/portfolioData';

const ContactSection = () => (
  <section>
    <TerminalPrompt command="contact --me" />
    <Card className="p-6">
      <div className="flex flex-wrap items-center gap-3">
        <Chip variant="primary" href={`mailto:${contactDetails.email}`}>
          <Mail className="w-4 h-4 mr-2" /> {contactDetails.email}
        </Chip>
        <Chip href={contactDetails.github}>
          <Github className="w-4 h-4 mr-2" /> GitHub
        </Chip>
        <Chip href={contactDetails.linkedin}>
          <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
        </Chip>
        <Chip variant="outline" href={heroContent.resumeUrl}>
          <Download className="w-4 h-4 mr-2" /> Resume (PDF)
        </Chip>
      </div>
    </Card>
  </section>
);

export default ContactSection;