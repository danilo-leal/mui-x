import * as React from 'react';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';

type Blog = {
  title: string;
  announcementDate: Date;
  description: string;
  url: string;
  highlightList: { title: string; url: string }[];
};

const blogs: Blog[] = [
  {
    title: 'MUI X v6.18.x',
    description:
      'New stable components, polished features, better performance, and more.',
    announcementDate: new Date(2023, 10, 13),
    url: 'https://mui.com/blog/mui-x-end-v6-features/',
    highlightList: [
      {
        title: 'Charts goes stable!',
        url: 'https://mui.com/blog/mui-x-end-v6-features/#charts',
      },
      {
        title: 'Tree View goes stable!',
        url: 'https://mui.com/blog/mui-x-end-v6-features/#tree-view',
      },
      {
        title: 'Clearable Date and Time fields',
        url: 'https://mui.com/blog/mui-x-end-v6-features/#clearable-field',
      },
      {
        title: 'Customization playgrounds for Date and Time Pickers',
        url: 'https://mui.com/blog/mui-x-end-v6-features/#customization-playgrounds',
      },
      {
        title: 'Data Grid column autosizing',
        url: 'https://mui.com/blog/mui-x-end-v6-features/#column-autosizing',
      },
      {
        title: 'Sparkline Charts on the Data Grid ',
        url: 'https://mui.com/blog/mui-x-end-v6-features/#sparkline-as-a-column-type',
      },
    ],
  },
  {
    title: 'MUI X v6.11.0',
    description: 'A roundup of all new features since v6.0.0.',
    announcementDate: new Date(2023, 7, 14),
    url: 'https://mui.com/blog/mui-x-mid-v6-features/',
    highlightList: [
      {
        title: 'Support for timezone on Date and Time Pickers',
        url: 'https://mui.com/blog/mui-x-mid-v6-features/#support-for-time-zones',
      },
      {
        title: 'Digital Clock',
        url: 'https://mui.com/blog/mui-x-mid-v6-features/#digital-clock',
      },
      {
        title: 'Data Grid: Column header filters',
        url: 'https://mui.com/blog/mui-x-mid-v6-features/#filter-on-column-headers',
      },
      {
        title: 'Data Grid: Copy and paste',
        url: 'https://mui.com/blog/mui-x-mid-v6-features/#copy-and-paste',
      },
      {
        title: 'Charts move to Alpha 🧪',
        url: 'https://mui.com/blog/mui-x-mid-v6-features/#charts-alpha-version',
      },
      {
        title: 'TreeView migration from the lab',
        url: 'https://mui.com/blog/mui-x-mid-v6-features/#tree-view-is-moving-to-mui-x',
      },
    ],
  },
  {
    title: 'MUI X v6.0.0',
    description:
      'A new major is available, with many new features and improvements.',
    announcementDate: new Date(2023, 2, 6),
    url: 'https://mui.com/blog/mui-x-v6/',
    highlightList: [
      {
        title: 'Date and Time Pickers',
        url: 'https://mui.com/blog/mui-x-v6/#fields-the-new-default-input-gt-for-pickers',
      },
      {
        title: 'Date Range shortcuts',
        url: 'https://mui.com/blog/mui-x-v6/#shortcuts-for-picking-specific-dates-in-a-calendar',
      },
      {
        title: 'Improved layout customization',
        url: 'https://mui.com/blog/mui-x-v6/#improved-layout-customization',
      },
      {
        title: 'Edit ranges with drag and drop',
        url: 'https://mui.com/blog/mui-x-v6/#edit-date-ranges-with-drag-and-drop',
      },
      {
        title: 'New Column menu',
        url: 'https://mui.com/blog/mui-x-v6/#improved-column-menu',
      },
      {
        title: 'ApiRef in the community version',
        url: 'https://mui.com/blog/mui-x-v6/#apiref-moved-to-the-mit-community-version',
      },
      {
        title: 'Cell selection',
        url: 'https://mui.com/blog/mui-x-v6/#cell-selection',
      },
    ],
  },
  {
    title: 'Date Pickers v5.0.0',
    description:
      'After some months of polishing in pre-releases, the Date Pickers finally get a stable.',
    announcementDate: new Date(2022, 8, 22),
    url: 'https://mui.com/blog/date-pickers-stable-v5/',
    highlightList: [
      {
        title: 'Better APIs',
        url: 'https://mui.com/blog/date-pickers-stable-v5/#better-apis-and-improved-customization',
      },
      {
        title: 'Easier customization',
        url: 'https://mui.com/blog/date-pickers-stable-v5/#better-apis-and-improved-customization',
      },
      {
        title: 'Integrated localization',
        url: 'https://mui.com/blog/date-pickers-stable-v5/#integrated-localization',
      },
    ],
  },
  {
    title: 'Data Grid v5.15',
    description:
      'This version brings an amazing set of new supported use cases with the Data Grid Premium.',
    announcementDate: new Date(2022, 7, 12),
    url: 'https://mui.com/blog/aggregation-functions/',
    highlightList: [
      {
        title: 'Aggregation in summary rows and row groups',
        url: 'https://mui.com/blog/aggregation-functions/#wait-what-is-an-aggregation-function',
      },
      {
        title: 'Row pinning',
        url: 'https://mui.com/blog/aggregation-functions/#row-pinning',
      },
    ],
  },
  {
    title: 'New Premium plan',
    description:
      'Premium plan announcement, including the most advanced features for data analysis and management.',
    announcementDate: new Date(2022, 4, 12),
    url: 'https://mui.com/blog/premium-plan-release/',
    highlightList: [
      { title: 'Row Grouping', url: '/x/react-data-grid/row-grouping/' },
      { title: 'Excel export', url: '/x/react-data-grid/export/#exported-rows' },
    ],
  },
  {
    title: 'MUI X v5.0.0',
    description:
      'A new Data Grid virtualization engine, and improvements in several APIs.',
    announcementDate: new Date(2021, 10, 22),
    url: 'https://mui.com/blog/mui-x-v5/',
    highlightList: [
      {
        title: 'New virtualization engine',
        url: 'https://mui.com/blog/mui-x-v5/#a-new-virtualization-engine',
      },
      {
        title: 'Improved state management',
        url: 'https://mui.com/blog/mui-x-v5/#improved-state-management',
      },
      {
        title: 'Simplified style customization',
        url: 'https://mui.com/blog/mui-x-v5/#simplified-style-customization',
      },
    ],
  },
];

function BlogCard(props: { blog: Blog }) {
  return (
    <Card
      variant="outlined"
      sx={(theme) => ({
        background: 'transparent',
        borderColor: 'divider',
        ...theme.applyDarkStyles({
          color: 'primary.300',
          background: 'transparent',
          borderColor: 'divider',
        }),
      })}
    >
      <Box
        sx={(theme) => ({
          p: 2.5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 3,
          background: `${(theme.vars || theme).palette.gradients.linearSubtle}`,
          ...theme.applyDarkStyles({
            bgcolor: 'primaryDark.900',
            background: `${(theme.vars || theme).palette.gradients.linearSubtle}`,
          }),
        })}
      >
        <div>
          <Typography
            component="div"
            color="text.primary"
            fontWeight="bold"
            mb={0.2}
          >
            {props.blog.title}
          </Typography>
          <Typography component="div" color="text.secondary" variant="body2">
            {props.blog.description}
          </Typography>
        </div>
        <Button
          component="a"
          size="small"
          variant="outlined"
          href={props.blog.url}
          sx={{ height: 'fit-content', flexShrink: 0 }}
        >
          Read more
        </Button>
      </Box>
      <Divider />
      <List sx={{ p: 2, pt: 1.5 }}>
        {props.blog.highlightList.map((item) => (
          <ListItem
            key={item.title}
            sx={{
              py: 0.5,
              px: 0.5,
              display: 'flex',
              alignItems: 'flex-start',
              lineHeight: '22px',
              [`&:before`]: {
                content: '"➞"',
                opacity: '50%',
                color: 'primary.300',
                lineHeight: '22px',
              },
            }}
          >
            <Link
              href={item.url}
              variant="body2"
              sx={{ pl: 1.5, fontWeight: 'medium' }}
            >
              {item.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default function ChangeLog() {
  return (
    <BrandingCssVarsProvider>
      <Timeline
        sx={{
          p: 0,
          'li:first-child': {
            '& .top-connector': {
              visibility: 'hidden',
            },
          },
          'li:last-child': {
            '& .MuiTimelineContent-root': {
              pb: 0,
            },
            '& .bottom-connector': {
              visibility: 'hidden',
            },
          },
        }}
      >
        {blogs.map((blog) => (
          <TimelineItem>
            <TimelineOppositeContent
              variant="body2"
              color="text.tertiary"
              sx={{
                flex: 'none',
                px: 0,
                pt: 3.5,
                pr: 3,
                width: 120,
                textAlign: 'left',
                fontWeight: 'medium',
              }}
            >
              {blog.announcementDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                className="top-connector"
                sx={(theme) => ({
                  height: 32,
                  flexGrow: 0,
                  width: '1px',
                  backgroundColor: 'grey.100',
                  ...theme.applyDarkStyles({ backgroundColor: 'primaryDark.700' }),
                })}
              />
              <TimelineDot
                sx={{
                  m: 0,
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  borderColor: 'grey.500',
                  opacity: '60%',
                  borderWidth: '1px',
                }}
              />
              <TimelineConnector
                className="bottom-connector"
                sx={(theme) => ({
                  width: '1px',
                  backgroundColor: 'grey.100',
                  ...theme.applyDarkStyles({ backgroundColor: 'primaryDark.700' }),
                })}
              />
            </TimelineSeparator>
            <TimelineContent sx={{ pl: 4, pr: 0, pt: 0, pb: 3 }}>
              <BlogCard blog={blog} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </BrandingCssVarsProvider>
  );
}
