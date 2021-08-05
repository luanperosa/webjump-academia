<?php

declare(strict_types=1);

namespace Webjump\Academia\Controller\Index;

use Magento\Framework\App\Action\Action;
use Magento\Framework\App\Action\Context;
use Magento\Framework\Controller\ResultFactory;
use Webjump\Academia\Model\Task;
use Webjump\Academia\Model\ResourceModel\Task as TaskResource;
use Webjump\Academia\Model\TaskFactory;

class Index extends Action
{
    private $taskResource;

    private $taskFactory;

    /**
     * @param \Magento\Framework\App\Action\Context $context
     */
    public function __construct(
        Context $context,
        TaskFactory $taskFactory,
        TaskResource $taskResource
    )
    {
        $this->taskFactory = $taskFactory;
        $this->taskResource = $taskResource;

        return parent::__construct($context);
    }
    /**
     * View page action
     *
     * @return \Magento\Framework\Controller\ResultInterface
     */
    public function execute()
    {
        // $task = $this->$taskFactory->create();

        // $task->setData([
        //     'label' => 'New Task 777',
        //     'status' => 'open',
        //     'customer_id' => 1
        // ]);

        // $this->$taskResource->save($task);

        return $this->resultFactory->create(ResultFactory::TYPE_PAGE);
    }
}
