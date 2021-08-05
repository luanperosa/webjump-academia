<?php

namespace Webjump\Academia\Model\ResourceModel\Task;

use \Webjump\Academia\Model\Task;
use \Webjump\Academia\Model\ResourceModel\Task as TaskResource;

class Collection extends \Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection
{
    public function __construct(
        \Magento\Framework\Model\ResourceModel\Db\Context $context
    )
    {
        parent::__construct($context);
    }

    protected function _construct()
    {
        $this->_init(Task::class, TaskResource::class);
    }
}
