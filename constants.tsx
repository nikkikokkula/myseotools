import { 
  Type, 
  Youtube, 
  Search, 
  Globe, 
  Settings, 
  Code, 
  Image as ImageIcon, 
  Calculator 
} from 'lucide-react';
import { ToolCategory, StatItem } from './types';

export const STATS: StatItem[] = [
  { value: '200+', label: 'Free Online Tools' },
  { value: '10M+', label: 'Times Tools Used' },
  { value: '20K+', label: 'Daily Users' },
  { value: '1.5M+', label: 'Page Views / Month' },
  { value: '600K+', label: 'Search Clicks / Month' },
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    id: 'text-tools',
    title: 'Text Tools',
    icon: Type,
    tools: [
      { name: 'Article Rewriter' },
      { name: 'Word Counter' },
      { name: 'Backwards Text Generator' },
      { name: 'Text to Hashtags Converter' },
      { name: 'Text Compare' },
      { name: 'Lorem Ipsum Generator' },
      { name: 'Case Converter' },
      { name: 'Remove Line Breaks' },
    ]
  },
  {
    id: 'youtube-tools',
    title: 'YouTube Tools',
    icon: Youtube,
    tools: [
      { name: 'YouTube Tag Extractor' },
      { name: 'YouTube Title Generator' },
      { name: 'YouTube Description Generator' },
      { name: 'YouTube Thumbnail Downloader' },
      { name: 'YouTube Channel ID Extractor' },
      { name: 'YouTube Money Calculator' },
      { name: 'YouTube Comment Picker' },
    ]
  },
  {
    id: 'seo-tools',
    title: 'SEO Tools',
    icon: Search,
    tools: [
      { name: 'Website Ranking Checker' },
      { name: 'Keywords Suggestion Tool' },
      { name: 'Keyword Density Checker' },
      { name: 'Google Index Checker' },
      { name: 'Meta Tag Generator' },
      { name: 'Meta Tag Analyzer' },
      { name: 'UTM Builder' },
    ]
  },
  {
    id: 'domain-tools',
    title: 'Domain & IP Tools',
    icon: Globe,
    tools: [
      { name: 'Domain to IP Converter' },
      { name: 'Domain Age Checker' },
      { name: 'Whois Domain Lookup' },
      { name: 'Hosting Checker' },
      { name: 'DNS Records Checker' },
      { name: 'What Is My IP' },
    ]
  },
  {
    id: 'web-management',
    title: 'Website Management Tools',
    icon: Settings,
    tools: [
      { name: 'Robots.txt Generator' },
      { name: 'HTTP Status Code Checker' },
      { name: 'Htaccess Redirect Generator' },
      { name: 'Server Status Checker' },
      { name: 'Get HTTP Headers' },
      { name: 'Redirect Checker' },
      { name: 'Privacy Policy Generator' },
      { name: 'Terms and Conditions Generator' },
      { name: 'Disclaimer Generator' },
    ]
  },
  {
    id: 'web-dev',
    title: 'Web Development Tools',
    icon: Code,
    tools: [
      { name: 'HTML Beautifier / Minifier' },
      { name: 'CSS Beautifier / Minifier' },
      { name: 'JS Beautifier / Minifier' },
      { name: 'JSON Formatter / Validator' },
      { name: 'JSON ⇄ XML' },
      { name: 'JSON ⇄ CSV' },
    ]
  },
  {
    id: 'image-tools',
    title: 'Image Editing Tools',
    icon: ImageIcon,
    tools: [
      { name: 'Image Converter' },
      { name: 'Convert to ICO' },
      { name: 'Image to Base64 / Base64 to Image' },
      { name: 'Flip Image' },
      { name: 'Rotate Image' },
      { name: 'Image Resizer' },
    ]
  },
  {
    id: 'calculators',
    title: 'Online Calculators & Converters',
    icon: Calculator,
    tools: [
      { name: 'AdSense Revenue Calculator' },
      { name: 'Age Calculator' },
      { name: 'Percentage Calculator' },
      { name: 'Loan Calculator' },
      { name: 'GST Calculator' },
      { name: 'Unit Converters' },
    ]
  },
];

export const LANGUAGES = [
  'English', 'العربية', 'Deutsch', 'Español', 'Français', 
  'Italiano', '日本語', 'Português', 'Русский', 'Türkçe', 
  'Tiếng Việt', '简体中文'
];
